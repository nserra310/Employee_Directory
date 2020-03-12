import React from "react";

const styles = {
    searchBox: {
        height: "40px",
        width: "200px",
        margin: "auto",
        display: "block",
        marginTop: "30px"
    }
}

function SearchBox(props) {
    return (
        <div>
            <input style={styles.searchBox}
                value={props.search}
                onChange={props.handleInputChange}
                name="search"
                list="employees"
                type="text"
                className="form-control"
                placeholder="Search"
                id="search"
            />
        </div>
    );
}

export default SearchBox;