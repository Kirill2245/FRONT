
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface AddSkillsProps {
  skills: string[];
  onSkillsChange: (skills: string[]) => void;
}

const AddSkills = ({ skills, onSkillsChange }: AddSkillsProps) => {
  const [inputValue, setInputValue] = useState("");

  const addSkill = () => {
    const trimmedSkill = inputValue.trim();
    if (trimmedSkill && !skills.includes(trimmedSkill) && skills.length < 20) {
      onSkillsChange([...skills, trimmedSkill]);
      setInputValue("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    onSkillsChange(skills.filter((skill) => skill !== skillToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="mb-1 text-[14px] text-[#101828] font-medium">
          Необходимые навыки
        </span>
        <Input
          placeholder="Начните вводить навык и нажмите Enter"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="text-xs text-[#6A7282]">
          Добавьте минимум 3 навыка для лучшего подбора
        </span>
      </label>

      {/* Список добавленных навыков */}
      {skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F2F4FE] rounded-full text-sm text-[#101073]"
            >
              <span>{skill}</span>
              <button
                type="button"
                onClick={() => removeSkill(skill)}
                className="hover:opacity-70 transition-opacity"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Индикатор прогресса */}
      <div className="flex justify-between items-center">
        <span className="text-xs text-[#6A7282]">
          {skills.length}/20 навыков добавлено
        </span>
        {skills.length < 3 && (
          <span className="text-xs text-amber-600">
            Нужно еще {3 - skills.length} навык(а)
          </span>
        )}
      </div>
    </div>
  );
};

export default AddSkills;