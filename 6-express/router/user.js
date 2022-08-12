/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */

import express from 'express';
const router = express.Router();

/**
 * @swagger
 * paths:
 *  /users:
 *    get:
 *      summary: "유저 데이터 전체조회"
 *      description: "서버에 데이터를 보내지 않고 Get방식으로 요청"
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 전체 유저 정보
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *                          [
 *                            { "id": 1, "name": "유저1" },
 *                            { "id": 2, "name": "유저2" },
 *                            { "id": 3, "name": "유저3" },
 *                          ]
 */
router.get('/', (req, res) => {
    res.status(201).send('GET: /users');
});

router.post('/', (req, res) => {
    res.status(201).send('POST: /users');
});

router.put('/:id', (req, res) => {
    res.status(201).send('PUT: /users');
});

router.delete('/:id', (req, res) => {
    res.status(201).send('DELETE: /users');
});

export default router;

// // 하단처럼 연결해서 사용 가능
// import express from 'express';
// const router = express.Router();

// router
//     .get('/', (req, res) => {
//         res.status(201).send('GET: /users');
//     })
//     .post('/', (req, res) => {
//         res.status(201).send('POST: /users');
//     })
//     .put('/:id', (req, res) => {
//         res.status(201).send('PUT: /users');
//     })
//     .delete('/:id', (req, res) => {
//         res.status(201).send('DELETE: /users');
//     });

// export default router;
