// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import "../../assets/CSS/SearchBar.css"
// // import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
// import { FaSearch } from "react-icons/fa";

// const SearchBar = () => {
//   return (
//     <div className='search-body'>
//       <div className="box">
//             {/* <input type="checkbox" id="check" /> */}
//             <div className="search_box">
//                 <input type="text" placeholder="Type here..." />
//                 <FaSearch />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default SearchBar

// import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <Space direction="vertical">
    <Search
      placeholder="Search For Course"
      allowClear
      enterButton="Search"
      onSearch={onSearch}
      size='large'
      style={{width:'450px',marginLeft:'500px'}}
    />
  </Space>
);
export default SearchBar;