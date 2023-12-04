import { Box, NumberInput, TextInput, Group, Button } from '@mantine/core';
import { useForm } from "@mantine/form"
import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from 'react';
import UserDetailContext from '../../context/userDetailContext';
import useProperties from '../../hooks/UseProperties';
import { useMutation } from 'react-query';
import { createResidency } from '../../utils/api';
import { toast } from "react-toastify";

const Facilities = ({ prevStep, nextStep, propertyDetails, setPropertyDetails, setOpened, setActive }) => {

    const form = useForm({
        initialValues: {
            bedrooms: propertyDetails?.facilities.bedrooms,
            parking: propertyDetails?.facilities.parking,
            bathrooms: propertyDetails?.facilities.bathrooms
        },

        // validate: {
        //     bedrooms: (value) => ((value < 1 || undefined )  ? "Must have atleast one room" : null),
        //     bathrooms: (value) => ((value < 1 || undefined ) ? "Must have atleast one bethroom" : null)
        // }
    });

    const { bedrooms, parking, bathrooms } = form.values;


    /** Uploading property in the db logic */
    const { user } = useAuth0();
    const { userDetails: { token } } = useContext(UserDetailContext);
    const { refetch: refetchProperties } = useProperties();
    const { mutate, isLoading } = useMutation({
        mutationFn: () => createResidency({ ...propertyDetails, facilities: { bedrooms, parking, bathrooms } }, token),
        onError: (response) => toast.error(response.data.message, { position: "bottom-right" }),
        onSettled: () => {
            toast.success("Added Successfully", { position: "bottom-right" });
            setPropertyDetails({
                title: "",
                description: "",
                price: 0,
                country: "",
                city: "",
                address: "",
                image: null,
                facilities: {
                    bedrooms: 0,
                    parking: 0,
                    bathrooms: 0
                },
                userEmail: user.email
            })
            setOpened(false);
            setActive(0);
            refetchProperties();
        }
    });

    // const handleSubmit = () => {
    //     const {hasError} = form.validate();
    //     if(!hasError) {
    //         setPropertyDetails((prev) => ({
    //             ...prev, facilities: {bedrooms, parking, bathrooms}
    //         }));
    //         mutate();
    //     } 
    // }




    return (
        <Box maw="30%" mx="auto" my="sm">
            <form onSubmit={(e) => { e.preventDefault(); mutate() }}>
                <NumberInput
                    withAsterisk
                    label="No of Bedrooms"
                    min={1}
                    {...form.getInputProps("bedrooms")}
                />

                <NumberInput
                    withAsterisk
                    label="No of Parkings"
                    min={0}
                    {...form.getInputProps("parkings")}
                />

                <NumberInput
                    withAsterisk
                    label="No of Bathrooms"
                    min={1}
                    {...form.getInputProps("bathrooms")}
                />

                <Group position='center' mt={"xl"}>
                    <Button variant="default" onClick={prevStep}>Back</Button>
                    <Button type='submit' disabled={isLoading} color="green" >
                        {isLoading ? "submitting" : "Add Property"}
                    </Button>
                </Group>
            </form>
        </Box>
    )
}

export default Facilities