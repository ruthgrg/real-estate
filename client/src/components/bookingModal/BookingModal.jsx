import {Modal, Button} from "@mantine/core"
import {DatePicker} from "@mantine/dates"

const BookingModal = ({opened, setOpened, propertyId, email}) => {
  return (
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Select your date of visit"
        centered
    >
        <div className="flexColCenter">
           <DatePicker />
            <Button>
                Book visit
            </Button>
        </div>
    </Modal>
  )
}

export default BookingModal