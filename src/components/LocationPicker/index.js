import {LocationPickerContainer, LocationIcon} from './styles';

export default function LocationPicker() {
  return (
    <LocationPickerContainer>
      <LocationIcon src="/images/locationIcon.svg"></LocationIcon>
      <p>Localização:</p>
      <p>Escolher uma localização</p>
    </LocationPickerContainer>
  );
}
