import { CountryProps } from "@/types";

export default async function getAllCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    const countries: CountryProps[] = data.map((country: any) => ({
      label: country.name.common,
      value: country.cca2 || "",
    }));

    return countries;
  } catch (error: any) {
    return null;
  }
}
