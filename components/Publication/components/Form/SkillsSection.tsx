// SkillsSection.tsx
import Box from "./box";
import AddSkills from "./AddSkils";

interface SkillsSectionProps {
  skills: string[];
  onSkillsChange: (skills: string[]) => void;
}

const SkillsSection = ({ skills, onSkillsChange }: SkillsSectionProps) => {
  return (
    <Box header="Навыки и требования">
      <AddSkills skills={skills} onSkillsChange={onSkillsChange} />
    </Box>
  );
};

export default SkillsSection;