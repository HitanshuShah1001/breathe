import React,{useState} from 'react'
import { Labels } from '../../Utils/Durationvalues'
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './styles'
import { Context } from '../../Statemanagement/Context'

interface Props {
  minutes?: Number
  setMinutes?: Function
}
export default function Duration() {
    const {duration,setDuration} = React.useContext(Context);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(Labels[0].value);
    const [items, setItems] = useState(
      Labels
    );
  
    return (
      <DropDownPicker
        open={open}
        onPress={() => setOpen(!open)}
        value={value}
        items={items}
        setOpen={setOpen}
        onSelectItem={(item) => {
          console.log("pRESS")
        }}
        onChangeValue={(VAL) => {
          console.log(VAL)
        }}
        style={styles.container}
        dropDownContainerStyle={styles.dropdowncontainer}
        placeholder="1 min"
      />
    );
}
