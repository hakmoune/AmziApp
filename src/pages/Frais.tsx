import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Frais = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Frais.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4"></CardContent>
    </Card>
  );
};

export default Frais;
