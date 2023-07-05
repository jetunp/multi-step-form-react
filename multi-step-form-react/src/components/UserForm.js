import { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
const UserForm = () => {
	const [step, setStep] = useState(1);
	const [fields, setFields] = useState({
		firstName: '',
		lastName: '',
		email: '',
		city: '',
		occupation: '',
		bio: '',
	});

	//proceed to next step
	const nextStep = () => {
		setStep(() => step + 1);
	};

	//proceed to prev step
	const prevStep = () => {
		setStep(() => step - 1);
	};

	//handle the change in fields
	const handleChange = (fieldName) => (event) => {
		const { value } = event.target;
		setFields((prevState) => ({
			...prevState,
			[fieldName]: value,
		}));
	};
	const { firstName, lastName, email, occupation, city, bio } = fields;
	const values = { firstName, lastName, email, occupation, city, bio };

	switch (step) {
		case 1:
			return (
				<FormUserDetails
					nextStep={nextStep}
					handleChange={handleChange}
					values={values}
				/>
			);
		case 2:
			return (
				<FormPersonalDetails
					prevStep={prevStep}
					nextStep={nextStep}
					handleChange={handleChange}
					values={values}
				/>
			);
		case 3:
			return (
				<Confirm prevStep={prevStep} nextStep={nextStep} values={values} />
			);
		case 4:
			return <h1>Success</h1>;
	}
};

export default UserForm;
