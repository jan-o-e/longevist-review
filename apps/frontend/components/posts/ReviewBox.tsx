import { Button, Text, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useAccount } from "wagmi"

export default function ReviewBox(props: {addReview: any}) {
  const { address, isConnected } = useAccount();
  const [review, setReview] = useState();

  const addReview = () => {
    props.addReview(address, review);
  }

  const handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setReview(inputValue);
  }

  return (
    <div>
      {isConnected ? (
        <div>
          <VStack spacing={2} align={"left"} direction={"column"}>
            <Text>
              Commenting as <b>{address}</b>:
            </Text>
            <Textarea
              value={review}
              onChange={handleInputChange}
            />
            <Button onClick={addReview}>Sumbit</Button>
          </VStack>
        </div>
      ) : (
        <div>
          <i>Must be connected to review</i>
        </div>
      )}
    </div>
  )
}