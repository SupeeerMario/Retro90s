import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="10px"
        columnGap="clamp(20px, 10px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h1"
            fontWeight="bold"
            mb="10px"
            color={shades.secondary[500]}
          >
            Retro90s
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="10px">
            About Us
          </Typography>
          <Typography mb="10px">Careers</Typography>
          <Typography mb="10px">Our Stores</Typography>
          <Typography mb="10px">Terms & Conditions</Typography>
          <Typography mb="10px">Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="10px">
            Customer Care
          </Typography>
          <Typography mb="10px">Help Center</Typography>
          <Typography mb="10px">Track Your Order</Typography>
          <Typography mb="10px">Corporate & Bulk Purchasing</Typography>
          <Typography mb="10px">Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="10px">
            Contact Us
          </Typography>
          <Typography mb="10px">
           12 Faculty Of Science,El-Shatby,Alexandria,Egypt
          </Typography>
          <Typography mb="10px" sx={{ wordWrap: "break-word" }}>
            Email: Retro90s@gmail.com
          </Typography>
          <Typography mb="10px"></Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
