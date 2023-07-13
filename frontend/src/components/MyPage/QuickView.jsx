import React, { useState, useEffect } from "react";
import Container from "../components/Common/Container";
import Box from "../components/Common/Box";
import TagBox from "../components/MyPage/TagBox";
import Tag from "../components/MyPage/Tag";
import QuickAxiosApi from "../../api/QuickAddAxiosAPI";

const QuickAdd = ({ isBasic }) => {
  const [myPageList, setMyPageList] = useState([]);

  useEffect(() => {
    const getMyPageList = async () => {
      try {
        const rsp = await QuickAxiosApi.getMyPageList();
        if (rsp.status === 200) setMyPageList(rsp.data);
        setMyPageList(rsp.data);
        console.log("마이페이지 list 조회");
      } catch (error) {
        console.error("Request Error:", error);
      }
    };
    getMyPageList();
  }, []);

  return (
    <>
      <Container>
        <Box>
          {isBasic ? (
            <>
              <TagBox tag={"일정"}>
                {myPageList.myScheduleDtoList &&
                  myPageList.myScheduleDtoList.map((data1) => (
                    <Tag color={data1.myColor} detail={data1.myScName} />
                  ))}
              </TagBox>
            </>
          ) : (
            <>
              <TagBox tag={"근무"}>
                {myPageList.myWorkDtoList &&
                  myPageList.myWorkDtoList.map((data2) => (
                    <Tag color={data2.myColor} detail={data2.myWkName} />
                  ))}
              </TagBox>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default QuickAdd;
