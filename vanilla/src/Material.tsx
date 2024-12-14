import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import AccessibilityIcon from '@mui/icons-material/Accessibility';

import Table from './components/materials/Table';
import MediaCard from './components/materials/MediaCard';
import AnchorTemporaryDrawer from './components/materials/AnchorTemporaryDrawer';
import Grid from './components/materials/Grid';

interface MaterialProps {
  message: string
}

export default function Material(props: MaterialProps) {
  let [count,setCount] = React.useState<number>(0);
  const [value, setValue] = React.useState<number | null>(2);
  function putConsole() {
    setCount(count+=1);
    console.log(`${props.message}(${count}回)`);
  }
  return(
    <div className="my-4">
      <h2 className="border-bottom border-dark py-2 mb-3">This is Material component.</h2>
      <Button variant="contained" onClick={putConsole}>コンソールに出力</Button>
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography component="legend">Uncontrolled</Typography>
        <Rating
          name="simple-uncontrolled"
          onChange={(event, newValue) => {
            console.log(newValue);
          }}
          defaultValue={2}
        />
        <Typography component="legend">Read only</Typography>
        <Rating name="read-only" value={value} readOnly />
        <Typography component="legend">Disabled</Typography>
        <Rating name="disabled" value={value} disabled />
        <Typography component="legend">No rating given</Typography>
        <Rating name="no-value" value={null} />
      </Box>
      <div className="mt-3">
        <AccessibilityIcon />
      </div>
      <div className="mt-3">
        <Table />
      </div>
      <div className="mt-3">
        <MediaCard image="https://www.creativeman.co.jp/wp-content/uploads/2019/04/Avicii01.jpg"/>
        <MediaCard image="https://block.fm/_next/image?url=https%3A%2F%2Fimg.block.fm%2Fwp-content%2Fuploads%2F2021%2F10%2F2ea48b4a-34b1-42f9-93d0-a9984ce6ad3a.png&w=3840&q=75"/>
      </div>
      <div className="mt-3">
        <AnchorTemporaryDrawer />
      </div>
      <div className="mt-3">
        <Grid />
      </div>
    </div>
  );
}