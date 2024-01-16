import getAllCountries from "../actions/getCountries";
import AddHomeForm from "./_components/form";

const Page = async () => {
  const countries = await getAllCountries();

  return <AddHomeForm countries={countries!} />;
};

export default Page;
