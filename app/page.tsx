import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
<div>
  <Button>
    I'm a Button
  </Button>
</div>
<div>
  <Progress value={95}/>
</div>
<div>
  <Checkbox />
</div>
</div>
  );
};