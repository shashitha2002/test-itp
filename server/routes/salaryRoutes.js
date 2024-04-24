import express from "express";
import {Staff} from '../models/StaffModel.js';
import {Salary} from '../models/SalaryModel.js';


const router = express.Router();

// server testing
// router.get('/', (req, res) => {
//     res.status(200).send("success")
// })

// test create staff (testing purpose only)
router.post('/addStaff', async (req, res) => {
    const newStaff = {
        staffName: req.body.staffName,
        NIC: req.body.NIC,
        birthday: req.body.birthday,
        experience: req.body.experience,
    }

    try {
        const staff = await Staff.create(newStaff);
        res.status(200).json(staff);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

// get all staff details (testing purpose only)
router.get('/staff', async (req, res) => {
    try {
        const staff = await Staff.find({});
        res.status(200).json(staff);
    }
    catch (e) {
        console.log(e);
        res.status(500).json(e);
    }
})

//view staff by the staff ID
router.get('/staff/:id',async (req,res) => {
    try{
        const { id } = req.params;
        const result = await Staff.findById(id)

        if(!result){
            return res.status(404).send({msg:"Staff member con ont be found"})
        }

        return res.status(200).json(result)

    }catch (e) {
        console.log(e)
        res.status(500).json(e);
    }
})

//update staff details
router.put('/staff/update/:id',async (req,res) => {
    const {id} = req.params;

    const result = await Staff.findByIdAndUpdate(id,req.body);

    if(!result){
        return res.status(404).send({msg:"Staff member con ont be found"})
    }

    return res.status(200).send({msg:"Staff member updated successfully"})

})

//delete a staff member
router.delete('/staff/delete/:id', async (req,res) => {
    try {
        const{id} = req.params;

        const result = await Staff.findByIdAndDelete(id);

        if (!result){
            return res.status(400).send({message:"staff cannot be found"})
        }

        return res.status(200).send({message:"staff member deleted successfully"})

    }catch (e) {
        res.status(500).json(e);
    }
})

// add salary
router.post('/addSalary', async (req, res) => {
    const staffId = req.body.staffId;
    const month = req.body.month;
    const workingHours = req.body.workingHours;
    const OTHours = req.body.OTHours;
    const workingSalary = req.body.workingSalary;
    const OTSalary = req.body.OTSalary;
    const totalSalary = (workingHours * workingSalary) + (OTHours * OTSalary);
    try {
        // check user
        var staff = await Staff.findById(staffId);
        if (!staff) {
            res.status(404).json({ msg: "Invalid staff ID" });
            return
        }

        // save salary
        const salary = await Salary.create({
            staffId: staffId,
            workingHours: workingHours,
            OTHours: OTHours,
            workingSalary: workingSalary,
            OTSalary: OTSalary,
            totalSalary: totalSalary,
            month: month,
        });

        res.status(200).json(salary);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

// get all salary
router.get('/', async (req, res) => {
    try {
        const allSalary = await Salary.find();
        res.status(200).json(allSalary);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

// get salary for staff member 
router.get('/staff/:sId', async (req, res) => {
    try {
        const staffId = req.params.sId;
        const salary = await Salary.find(staffId);
        res.status(200).json(salary);
    }
    catch (e) {
        res.status(500).json(e);
    }
});

// get all staff salary specific month
router.get('/month/:month', async (req, res) => {
    try {
        const month = req.params.month;
        const salary = await Salary.find({ month: month });
        res.status(200).json(salary);
    }
    catch (e) {
        res.status(500).json(e);
    }
})

// delete salary
router.delete('/:id', async (req, res) => {
    try {
        const salId = req.params.id;
        const salary = await Salary.findByIdAndDelete(salId);
        if (!salary) {
            return res.status(404).send({ message: "Salary cannot be found" })
        }
        res.status(200).send({ message: "Salary deleted successfully" })
    }
    catch (e) {
        res.status(500).json(e);
    }
})
// update salary
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const staffId = req.body.staffId;
    const month = req.body.month;
    const workingHours = req.body.workingHours;
    const OTHours = req.body.OTHours;
    const workingSalary = req.body.workingSalary;
    const OTSalary = req.body.OTSalary;
    const totalSalary = (workingHours * workingSalary) + (OTHours * OTSalary);
    try {
        // check user
        var salary = await Salary.findById(id);
        if (!salary) {
            res.status(404).json({ msg: "Invalid salary ID" });
            return
        }

        // save salary
        const updatedSalary = await Salary.findByIdAndUpdate(id, {
            staffId: staffId,
            workingHours: workingHours,
            OTHours: OTHours,
            workingSalary: workingSalary,
            OTSalary: OTSalary,
            totalSalary: totalSalary,
            month: month,
        });

        res.status(200).json(updatedSalary);
    }
    catch (e) {
        res.status(500).json(e);
    }
});
export default router;