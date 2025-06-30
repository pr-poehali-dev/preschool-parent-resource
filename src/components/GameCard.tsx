import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  description: string;
  ageGroup: string;
  category: string;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  icon: string;
  color: string;
}

export default function GameCard({
  title,
  description,
  ageGroup,
  category,
  duration,
  difficulty,
  icon,
  color,
}: GameCardProps) {
  const getDifficultyColor = (level: string) => {
    switch (level) {
      case "easy":
        return "bg-green-100 text-green-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyText = (level: string) => {
    switch (level) {
      case "easy":
        return "Легко";
      case "medium":
        return "Средне";
      case "hard":
        return "Сложно";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-bright-orange/30 bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
          >
            <Icon name={icon as any} className="text-white" size={24} />
          </div>
          <Badge variant="secondary" className="font-open-sans text-xs">
            {ageGroup}
          </Badge>
        </div>

        <h3 className="text-xl font-bold font-rubik text-gray-800 group-hover:text-bright-orange transition-colors">
          {title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="font-open-sans text-xs">
            <Icon name="Tag" className="mr-1" size={12} />
            {category}
          </Badge>

          <Badge variant="outline" className="font-open-sans text-xs">
            <Icon name="Clock" className="mr-1" size={12} />
            {duration}
          </Badge>

          <Badge
            className={`font-open-sans text-xs ${getDifficultyColor(difficulty)}`}
          >
            <Icon name="TrendingUp" className="mr-1" size={12} />
            {getDifficultyText(difficulty)}
          </Badge>
        </div>

        <Button
          className="w-full bg-bright-orange hover:bg-bright-orange/90 text-white font-rubik"
          size="sm"
        >
          <Icon name="PlayCircle" className="mr-2" size={16} />
          Играть
        </Button>
      </CardContent>
    </Card>
  );
}
