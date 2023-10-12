var express = require("express");
var Axios = require("axios");
const { resource } = require("../app");
var router = express.Router();

// 네이버 검색 api
router.get("/search", async function (req, res) {
  let query = req.query.query;

  let reqOptions = {
    headers: {
      "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
      "X-Naver-Client-Secret": "FBtejVg8km",
    },
    params: {
      query: `서울 ${query}`,
      display: 5,
    },
  };
  try {
    let response = await Axios.get(
      "https://openapi.naver.com/v1/search/local.json",
      reqOptions
    );

    // 성공한 경우, JSON 응답 반환
    return res.json(response.data);
  } catch (e) {
    // 에러 발생 시, 에러 정보와 상태 코드 400을 클라이언트에게 반환
    console.error("API 요청 에러:", e);
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
});

// 이미지 검색 api
router.get("/imagesearch", async function (req, res) {
  let query = req.query.query;
  console.log(query);
  let reqOptions = {
    headers: {
      "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
      "X-Naver-Client-Secret": "FBtejVg8km",
    },
    params: {
      query: query,
      display: 100,
    },
  };
  try {
    // 네이버 서버로
    let response = await Axios.get(
      "https://openapi.naver.com/v1/search/image",
      reqOptions
    );

    // 성공한 경우, JSON 응답 반환
    return res.json(response.data);
  } catch (e) {
    // 에러 발생 시, 에러 정보와 상태 코드 400을 클라이언트에게 반환
    console.error("API 요청 에러:", e);
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
});

// 블로그 검색 api
router.get("/blogsearch", async function (req, res) {
  let query = req.query.query;
  console.log(query);
  let reqOptions = {
    headers: {
      "X-Naver-Client-Id": "2epbJX2GaPPxglloNsL_",
      "X-Naver-Client-Secret": "FBtejVg8km",
    },
    params: {
      query: query,
      display: 4,
    },
  };
  try {
    // 네이버 서버로
    let response = await Axios.get(
      "https://openapi.naver.com/v1/search/blog.json",
      reqOptions
    );

    // 성공한 경우, JSON 응답 반환
    return res.json(response.data);
  } catch (e) {
    // 에러 발생 시, 에러 정보와 상태 코드 400을 클라이언트에게 반환
    console.error("API 요청 에러:", e);
    return res.status(400).json({
      status: 400,
      message: e.message,
    });
  }
});
module.exports = router;
