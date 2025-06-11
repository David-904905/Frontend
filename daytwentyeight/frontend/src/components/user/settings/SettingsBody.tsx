import SettingsInputs from "./SettingsInputs";
import SettingsMail from "./SettingsMail";
import SettingsProfile from "./SettingsProfile";

const SettingsBody = () => {
  return (
    <div className='settings-body'>
        <div className="color-stuff"></div>
        <SettingsProfile />
        <SettingsInputs />
        <SettingsMail />
        
    </div>
  )
}

export default SettingsBody;