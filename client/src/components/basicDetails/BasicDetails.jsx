import { useForm } from '@mantine/form';
import { Box, NumberInput, TextInput,Group, Button } from '@mantine/core';
import { validateString } from '../../utils/common';

const BasicDetails = ({prevStep, nextStep, propertyDetails, setPropertyDetails}) => {

    const form = useForm({
        initialValues: {
            title: propertyDetails?.title,
            description: propertyDetails?.description,
            price: propertyDetails?.price
        },

        validate: {
            title: (value) => validateString(value),
            description: (value) => validateString(value),
            price: (value) => value < 1000 ? "Must be greater than 999 dollars" : null
        }
    });
    const {title, description, price} = form.values;

    const handleSubmit = () => {
        const {hasErrors} = form.validate();
    
        if(!hasErrors) {
            setPropertyDetails((prev) => ({
                ...prev, 
                title: title, 
                description: description, 
                price: price
            }));
            nextStep();
        }
    }


  return (
    <Box maw="50%" mx="auto" my="md">
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
            <TextInput
                // width={"100%"}
                withAsterisk
                label="Title"
                placeholder="Property Name"
                {...form.getInputProps("title", {type: "input"})}
            />

            <TextInput
                // width={"100%"}
                withAsterisk
                label="Description"
                placeholder="About your property"
                {...form.getInputProps("description", {type: "input"})}
            />

            <NumberInput
                withAsterisk
                label="Price"
                placeholder="1000"
                min={0}
                {...form.getInputProps("price")}
            />

            <Group position='center' mt={"xl"}>
                <Button variant="default" onClick={prevStep}>Back</Button>
                <Button type='submit'>Next</Button>
            </Group>

        </form>
    </Box>
  )
}

export default BasicDetails