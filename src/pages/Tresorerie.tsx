import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tresorerie = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trésorerie.</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4"></CardContent>
    </Card>
  );
};

export default Tresorerie;
