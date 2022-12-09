import React,{useState} from 'react'
import { Picker } from '@react-native-picker/picker'
import { Labels } from '../../Utils/Durationvalues'
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './styles'
interface Props {
  minutes?: Number
  setMinutes?: Function
}
export default function Duration({ minutes, setMinutes }: Props) {
    const [open, setOpen] = useState(true);
    const [value, setValue] = useState(Labels[0].value);
    const [items, setItems] = useState(
      Labels
    );
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onSelectItem={(item) => {
          setValue(item.value)
        }}
        style={styles.container}
        dropDownContainerStyle={styles.dropdowncontainer}
        placeholder="1 min"
      />
    );
}
