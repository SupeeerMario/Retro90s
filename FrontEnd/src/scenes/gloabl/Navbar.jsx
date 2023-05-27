import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { useDispatch,useSelector } from "react-redux";
import { PersonOutline,
   ShoppingBagOutlined,
   MenuOutlined,
   SearchOutlined } from "@mui/icons-material";
import { Badge} from "@mui/base";
import { setIsCartOpen } from "../../state";


const Navbar = () => {
  const navigate = useNavigate();
const dispatch = useDispatch();
const cart = useSelector((state) => state.cart.cart);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}
            onClick={()=>navigate("/")}>
              Retro90s
            </Typography>
            <IconButton color="inherit"><SearchOutlined/></IconButton>
             
             <Badge
             badgeContent={cart.length}
             color="secondary"
             invisible={cart.length===0}
             >
             <IconButton color="inherit" onClick={()=>dispatch(setIsCartOpen({}))}><ShoppingBagOutlined/></IconButton>
             </Badge>
             <IconButton color="inherit"><PersonOutline/></IconButton>
             <IconButton color="inherit"><MenuOutlined/></IconButton>
             
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
export default Navbar;
