import React from 'react'

function Search(props) {

  const { handleWeatherSearch, location, handleLocationChange } = props;

  const handleOnKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleWeatherSearch(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="input_group">
        <input 
          type="text" 
          value={location}
          placeholder='도시 입력'
          onChange={handleLocationChange}
          />
        <button 
          className='btn' 
          type="submit"
          onClick={handleWeatherSearch}
        >Search</button>
      </div>
  )
}

export default Search