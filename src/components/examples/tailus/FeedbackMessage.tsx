import Form from "@tailus-ui/Form";
import Card from "@tailus-ui/Card";
import Button from "@tailus-ui/Button";

export const FeedbackMessage = () => {
    return (
        <Card className="w-full p-[--card-pading]" variant="mixed">
            <Form.Root className="space-y-8 py-8 max-w-xs mx-auto">
                <div className="space-y-4">
                    <Form.Field name="email" className="space-y-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control asChild>
                            <Form.Input
                                type="email"
                                required
                                className="border-gray-200 hover:border-gray-300 dark:hover:border-gray-700 dark:border-gray-800 dark:bg-gray-950 shadow-sm shadow-gray-950/5"
                            />
                        </Form.Control>
                        <Form.Message intent="warning" match="valueMissing">
                            Please enter your email
                        </Form.Message>
                        <Form.Message intent="danger" match="typeMismatch">
                            Please provide a valid email
                        </Form.Message>
                    </Form.Field>
                    <Form.Field name="password" className="space-y-2">
                        <Form.Label>Message</Form.Label>
                        <Form.Control asChild>
                            <Form.TextArea
                                required
                                rows={3}
                                className="border-gray-200 hover:border-gray-300 dark:hover:border-gray-700 dark:border-gray-800 dark:bg-gray-950 shadow-sm shadow-gray-950/5"
                            />
                        </Form.Control>
                        <Form.Message intent="warning" match="valueMissing">
                            Please enter your message
                        </Form.Message>
                        <Form.Message intent="danger" match="tooShort">
                            Please provide a longer message
                        </Form.Message>
                    </Form.Field>
                </div>

                <Form.Submit className="w-full">
                    <Button label="Submit" className="w-full" />
                </Form.Submit>
            </Form.Root>
        </Card>
    );
};