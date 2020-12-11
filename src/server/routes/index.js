// gkc_hash_code : 01DNZSWBW99P5C4HNT6E5GZ89S
import express from 'express';
import health from './health';

const router = express.Router();

router.use(
    health,
);

export default router;
