import {
    faPhone,
    faBars
  } from "@fortawesome/free-solid-svg-icons";
  import { library } from "@fortawesome/fontawesome-svg-core";
  
  const Icons = () => {
    return library.add(
      faPhone,
      faBars
    );
  };
  
  export default Icons;