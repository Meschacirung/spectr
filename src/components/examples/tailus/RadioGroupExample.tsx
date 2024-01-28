import RadioGroup from "@tailus-ui/RadioGroup"

export const RadioGroupExample = () => {
    return (
        <form>
            <RadioGroup.Root withShadow className="space-y-2.5" defaultValue="problem" aria-label="user feedback">
                <div className="flex items-center">
                    <RadioGroup.Item value="understanding" id="rr1">
                        <RadioGroup.Indicator/>
                    </RadioGroup.Item>
                    <RadioGroup.Label htmlFor="rr1">
                        Easy to understand
                    </RadioGroup.Label>
                </div>
                <div className="flex items-center">
                    <RadioGroup.Item value="problem" id="rr2">
                        <RadioGroup.Indicator/>
                    </RadioGroup.Item>
                    <RadioGroup.Label htmlFor="rr2">
                        Solved my problem
                    </RadioGroup.Label>
                </div>
                <div className="flex items-center">
                    <RadioGroup.Item value="other" id="rr3">
                        <RadioGroup.Indicator/>
                    </RadioGroup.Item>
                    <RadioGroup.Label htmlFor="rr3">
                        Other
                    </RadioGroup.Label>
                </div>
            </RadioGroup.Root>
        </form>
    )
}