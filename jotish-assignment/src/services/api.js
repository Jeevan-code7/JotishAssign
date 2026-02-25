import axios from "axios";

export const getEmployes = async () => {
  const EmpolyesData = await axios.post(
    " https://backend.jotish.in/backend_dev/gettabledata.php",
    {
      username: "test",
      password: "123456",
    },
  );
  return EmpolyesData.data.TABLE_DATA.data;
};
