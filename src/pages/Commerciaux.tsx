import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Commerciaux = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commerciaux.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4"></CardContent>
    </Card>
  );
};

export default Commerciaux;
