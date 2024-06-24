const express = require("express");
const { catchErrors } = require("../handlers/errorHandlers");

const router = express.Router();

const supplyController = require("../controllers/supplyController");

//_____________________________________ API for supplies ___________________________
router.route("/supply/create").post(catchErrors(supplyController.create));
router.route("/supply/read/:id").get(catchErrors(supplyController.read));
router.route("/supply/update/:id").patch(catchErrors(supplyController.update));
router.route("/supply/delete/:id").delete(catchErrors(supplyController.delete));
router.route("/supply/search").get(catchErrors(supplyController.search));
router.route("/supply/list").get(catchErrors(supplyController.list));

module.exports = router;
