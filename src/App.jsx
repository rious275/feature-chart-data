import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";
import ChartTable from "./component/ChartTable";
import Pagination from "./Pagination";

const App = () => {
  const [ posts, setPosts ] = useState([]);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ postsPerPage, setPostsPerPage ] = useState(5);
  
  useEffect(() => {
    axios.get('api/api-patient-list.json')
    .then(res => setPosts(res.data.patient.list))
  }, [])

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  const paginate = pageNum => setCurrentPage(pageNum);

  const handleViewList = (e) => {
    const { value } = e.target;
    value === "5" ? setPostsPerPage(5) : setPostsPerPage(10);
    setCurrentPage(1);
  }

  return (
    <AllContainer>
      <TitleName>Medical Records</TitleName>
      <div>
        <MiddleContainer>
          <Filters>
            <Filter>Gender</Filter>
            <Filter>Age</Filter>
            <Filter>Race</Filter>
            <Filter>Ethnicity</Filter>
            <Filter>Is Death</Filter>
          </Filters>
          <ViewList>
            <ViewTitle>View List</ViewTitle>
            <select name="View List" onChange={e => handleViewList(e)}>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </ViewList>
        </MiddleContainer>
        <ChartTable posts={currentPosts} />
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </AllContainer>
  );
}

export default App;

const AllContainer = styled.div`
  margin: 50px 80px;
`;

const TitleName = styled.h1`
  margin-bottom: 40px;

  font-family: 'muli', sans-serif;
`;

const MiddleContainer = styled.section`
  display: flex;
  justify-content: space-between;

  margin: 20px 0;
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
`;

const Filter = styled.button`
  display: flex;
  margin-right: 14px;
  padding: 8px 10px;

  border-style: none;
  border-radius: 6px;
  line-height: 1;
  background-color: #3284FC;
  color: #fff;

  &:hover {
    cursor: pointer;
  }

  input {
    margin-right: 6px;
  }
`;

const ViewList = styled.div`
  display: flex;
`;

const ViewTitle = styled.div`
  margin-right: 10px;
`;