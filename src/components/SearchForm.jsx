import { Form, useNavigation } from "react-router-dom";
import SearchStyles from "../styled-wrappers/SearchForm";

export const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  return (
    <SearchStyles>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </SearchStyles>
  );
};
