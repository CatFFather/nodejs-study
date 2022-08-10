import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(201).send('GET: /posts');
});

router.post('/', (req, res) => {
    res.status(201).send('POST: /posts');
});

router.put('/:id', (req, res) => {
    res.status(201).send('PUT: /posts');
});

router.delete('/:id', (req, res) => {
    res.status(201).send('DELETE: /posts');
});

export default router;

// // 하단처럼 연결해서 사용 가능
// import express from 'express';
// const router = express.Router();

// router
//     .get('/', (req, res) => {
//         res.status(201).send('GET: /posts');
//     })
//     .post('/', (req, res) => {
//         res.status(201).send('POST: /posts');
//     })
//     .put('/:id', (req, res) => {
//         res.status(201).send('PUT: /posts');
//     })
//     .delete('/:id', (req, res) => {
//         res.status(201).send('DELETE: /posts');
//     });

// export default router;
