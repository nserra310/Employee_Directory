import React from "react";

const styles = {
    nav: {
        height: "75px",
        backgroundColor: "#006400",
    },
    header: {
        fontSize: "32px",
        color: "white",
        textAlign: "center",
        paddingTop: "15px",
        paddingBottom: "10px"
    },
}

    function Navbar() {
        return (
            <nav style={styles.nav} className="nav navbar-nav navbar-center">
                <div style={styles.header}>Employee Directory
                </div>
            </nav>
        );
}

export default Navbar;