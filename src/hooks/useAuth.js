const { useContext } = require("react")
const { AuthContext } = require("../components/context/AuthProvider")

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;