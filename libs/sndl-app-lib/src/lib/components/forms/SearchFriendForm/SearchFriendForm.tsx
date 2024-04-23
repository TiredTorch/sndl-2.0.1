import {
	Form,
	Formik
} from "formik";
import { FC } from "react";
import { useIntl } from "react-intl";
import { Field } from "../../common";
import { validationSchema } from "./SearchFriendForm.schema";
import { SearchFriendFormProps } from "./SearchFriendForm.types";

export const SearchFriendForm: FC<SearchFriendFormProps> = ({
	onSubmit,
	initState
}) => {
	const intl = useIntl();

	return (
        <Formik
            initialValues={initState}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <Field
                        placeholder={intl.formatMessage({ id: "TXT_SEARCH_FRIEND_FORM" })}
                        id="field"
                        customVariant="sendChatMessage"
                        value={formik.values.field}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="field"
                    />
                </Form>
            )}
        </Formik>
	);
};

export default SearchFriendForm;