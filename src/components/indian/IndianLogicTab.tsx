import React, { useState } from 'react';
import { INDIAN_PRAMANAS, NYAYA_SYLLOGISM, INDIAN_SCHOOLS } from '../../data/indianPhilosophyData';
import { ScriptMode, DepthLevel, PramanaType } from '../../types/indianPhilosophy';
import { renderTerm } from '../../utils/indianPhilosophyUtils';
import { Cpu, CheckCircle2, XCircle, AlertOctagon, ArrowDown } from 'lucide-react';

interface IndianLogicTabProps {
  scriptMode: ScriptMode;
  depthLevel: DepthLevel;
}

export const IndianLogicTab: React.FC<IndianLogicTabProps> = ({
  scriptMode,
  depthLevel: _depthLevel
}) => {
  const [selectedPramanaId, setSelectedPramanaId] = useState<PramanaType>('pratyaksa');
  const selectedPramana = INDIAN_PRAMANAS.find(p => p.id === selectedPramanaId) || INDIAN_PRAMANAS[0];

  return (
    <div className="space-y-8">
      {/* Intro Header */}
      <div className="brutal-card p-6 bg-paper-100 dark:bg-[#1D222F] space-y-3">
        <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase text-amber-700 dark:text-amber-400">
          <Cpu className="w-4 h-4" />
          <span>Epistemology & Formal Logic (Pramāṇa-Vāda & Nyāya-Śāstra)</span>
        </div>
        <h2 className="text-2xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
          Valid Cognition, Syllogistic Inference & Fallacy Theory
        </h2>
        <p className="text-sm font-sans text-ink-700 dark:text-[#CBD5E1] max-w-4xl leading-relaxed">
          In classical Indian philosophy, metaphysics is strictly subordinate to epistemology: <em>mānādhīnā meyasiddhiḥ</em> ("the proof of the knowable depends upon the means of knowing"). Before asserting what exists, a school must establish the reliable causal instruments (<em>pramāṇas</em>) that produce non-defective, true knowledge.
        </p>
      </div>

      {/* Part 1: The 6 Pramāṇas & School Acceptance Matrix */}
      <div className="space-y-4">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-2 flex items-center justify-between">
          <h3 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            1. The Six Classical Means of Knowledge (Pramāṇas)
          </h3>
          <span className="font-mono text-xs text-amber-700 dark:text-amber-400 font-bold">
            Select a Pramāṇa to inspect
          </span>
        </div>

        {/* Pramāṇa Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INDIAN_PRAMANAS.map(p => {
            const isSelected = p.id === selectedPramanaId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedPramanaId(p.id)}
                className={`p-3 border-2 text-left transition-all ${
                  isSelected
                    ? 'bg-amber-600 text-white border-ink-900 dark:border-white shadow-brutal-sm'
                    : 'bg-paper-50 dark:bg-[#151821] text-ink-900 dark:text-[#F8FAFC] border-ink-900 dark:border-[#2E3547] hover:bg-paper-100'
                }`}
              >
                <div className="font-mono text-[9px] uppercase opacity-75">
                  {p.acceptedBySchools.length} Schools Accept
                </div>
                <div className="font-serif-title font-bold text-sm mt-0.5">
                  {renderTerm(p.name, scriptMode)}
                </div>
                <div className="font-mono text-[10px] opacity-80 truncate">
                  {p.name.iast}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pramāṇa Deep Dive */}
        <div className="brutal-card p-6 bg-paper-50 dark:bg-[#151821] space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink-900/10 dark:border-[#2E3547] pb-3">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400">
                Pramāṇa Definition
              </span>
              <h4 className="text-2xl font-serif-title font-black text-ink-900 dark:text-[#F8FAFC]">
                {renderTerm(selectedPramana.name, scriptMode)} ({selectedPramana.name.iast})
              </h4>
            </div>
            <div className="font-mono text-xs px-3 py-1 bg-ink-900/5 dark:bg-white/10 text-ink-700 dark:text-[#CBD5E1] border border-ink-900/20 dark:border-[#2E3547]">
              Devanāgarī: <strong>{selectedPramana.name.devanagari}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Core Epistemic Role</span>
                <p className="text-sm font-sans text-ink-800 dark:text-[#F8FAFC] leading-relaxed mt-1">
                  {selectedPramana.definition}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275]">Scholarly Analysis</span>
                <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed mt-1">
                  {selectedPramana.scholarlyDescription}
                </p>
              </div>

              <div className="p-3 bg-amber-500/10 border-l-3 border-amber-600 space-y-1">
                <span className="font-mono text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300">Classical Example</span>
                <p className="text-xs font-sans text-ink-800 dark:text-[#F8FAFC] italic">
                  "{selectedPramana.example}"
                </p>
              </div>
            </div>

            {/* School Acceptance & Rejection Breakdown */}
            <div className="space-y-4">
              <div>
                <span className="font-mono text-xs uppercase font-bold text-emerald-700 dark:text-emerald-400 flex items-center space-x-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Accepted As Distinct Valid Instrument By:</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedPramana.acceptedBySchools.map(schoolId => {
                    const school = INDIAN_SCHOOLS.find(s => s.id === schoolId);
                    return (
                      <span
                        key={schoolId}
                        className="font-mono text-xs px-2.5 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-600 text-emerald-900 dark:text-emerald-300 font-medium"
                      >
                        ✓ {school ? renderTerm(school.name, scriptMode) : schoolId}
                      </span>
                    );
                  })}
                </div>
              </div>

              {selectedPramana.rejectedBySchools.length > 0 && (
                <div>
                  <span className="font-mono text-xs uppercase font-bold text-rose-700 dark:text-rose-400 flex items-center space-x-1.5 mb-2">
                    <XCircle className="w-4 h-4" />
                    <span>Rejected As Reducible Or Invalid By:</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPramana.rejectedBySchools.map(schoolId => {
                      const school = INDIAN_SCHOOLS.find(s => s.id === schoolId);
                      return (
                        <span
                          key={schoolId}
                          className="font-mono text-xs px-2.5 py-1 bg-rose-50 dark:bg-rose-950/40 border border-rose-600 text-rose-900 dark:text-rose-300 font-medium"
                        >
                          ✕ {school ? renderTerm(school.name, scriptMode) : schoolId}
                        </span>
                      );
                    })}
                  </div>
                  <p className="text-[11px] font-sans text-ink-500 dark:text-[#8C8275] mt-1.5 italic">
                    Note: Rejecting schools typically argue this pramāṇa is either reducible to Inference (Anumāna) or invalid perception.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Part 2: The Nyāya 5-Member Syllogism (Pañcāvayava) */}
      <div className="space-y-4">
        <div className="border-b-2 border-ink-900 dark:border-[#2E3547] pb-2">
          <h3 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
            2. The Nyāya Five-Membered Syllogism (Pañcāvayava)
          </h3>
          <p className="text-xs font-sans text-ink-600 dark:text-[#CBD5E1]">
            Unlike the Aristotelian 3-term formal deduction, the Nyāya syllogism synthesizes formal logic, inductive empirical observation, and psychological communication into a 5-step demonstration for others (<em>parārthānumāna</em>).
          </p>
        </div>

        <div className="space-y-3">
          {NYAYA_SYLLOGISM.members.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="p-4 border-2 border-ink-900 dark:border-[#2E3547] bg-paper-50 dark:bg-[#151821] space-y-2 relative"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-mono text-xs font-bold flex items-center justify-center">
                    {step.stepNumber}
                  </span>
                  <h4 className="font-serif-title font-bold text-base text-ink-900 dark:text-[#F8FAFC]">
                    {renderTerm(step.sanskritName, scriptMode)} ({step.sanskritName.iast})
                  </h4>
                  <span className="font-mono text-xs px-2 py-0.5 bg-paper-200 dark:bg-[#1D222F] text-ink-700 dark:text-[#CBD5E1] border border-ink-900/15 dark:border-[#2E3547]">
                    {step.technicalRole}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-amber-700 dark:text-amber-400 font-bold">
                  Step 0{step.stepNumber} of 05
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-3 bg-amber-500/10 border-l-2 border-amber-600">
                  <span className="font-mono text-[10px] uppercase font-bold text-amber-800 dark:text-amber-300 block mb-0.5">
                    Classical Formula / Example:
                  </span>
                  <p className="text-xs font-mono font-bold text-ink-900 dark:text-[#F8FAFC]">
                    "{step.standardExample}"
                  </p>
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-ink-500 dark:text-[#8C8275] block mb-0.5">
                    Philosophical Function:
                  </span>
                  <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1] leading-relaxed">
                    {step.philosophicalSignificance}
                  </p>
                </div>
              </div>

              {idx < NYAYA_SYLLOGISM.members.length - 1 && (
                <div className="flex justify-center -mb-5 pt-1">
                  <ArrowDown className="w-4 h-4 text-ink-400 dark:text-ink-600" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Part 3: Vyāpti & Hetvābhāsa Fallacies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vyāpti */}
        <div className="brutal-card p-6 bg-paper-50 dark:bg-[#151821] space-y-4">
          <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-2">
            <span className="font-mono text-xs font-bold uppercase text-amber-700 dark:text-amber-400">
              The Epistemic Pivot
            </span>
            <h4 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
              Vyāpti (Invariable Concomitance)
            </h4>
          </div>
          <p className="text-xs font-sans text-ink-800 dark:text-[#CBD5E1] leading-relaxed">
            {NYAYA_SYLLOGISM.vyaptiExplanation.definition}
          </p>

          <div className="p-3 bg-paper-100 dark:bg-[#1D222F] border border-ink-900/20 dark:border-[#2E3547] space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400">Illustrative Case</span>
            <p className="text-xs font-sans text-ink-800 dark:text-[#F8FAFC]">
              {NYAYA_SYLLOGISM.vyaptiExplanation.example}
            </p>
          </div>

          <div className="p-3 bg-rose-500/10 border-l-2 border-rose-600 space-y-1">
            <span className="font-mono text-[10px] uppercase font-bold text-rose-800 dark:text-rose-300">The Problem of Upādhi (Extraneous Condition)</span>
            <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
              {NYAYA_SYLLOGISM.vyaptiExplanation.fallacyRisk}
            </p>
          </div>
        </div>

        {/* Fallacies (Hetvābhāsa) */}
        <div className="brutal-card p-6 bg-paper-50 dark:bg-[#151821] space-y-4">
          <div className="border-b border-ink-900/15 dark:border-[#2E3547] pb-2 flex items-center justify-between">
            <div>
              <span className="font-mono text-xs font-bold uppercase text-rose-700 dark:text-rose-400">
                Invalid Inferences
              </span>
              <h4 className="text-xl font-serif-title font-bold text-ink-900 dark:text-[#F8FAFC]">
                Hetvābhāsa (The Fallacies of Reason)
              </h4>
            </div>
            <AlertOctagon className="w-5 h-5 text-rose-600" />
          </div>

          <div className="space-y-3">
            {NYAYA_SYLLOGISM.fallacies.map((fal, idx) => (
              <div key={idx} className="p-3 border border-ink-900/15 dark:border-[#2E3547] bg-paper-100 dark:bg-[#1D222F] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-serif-title font-bold text-sm text-ink-900 dark:text-[#F8FAFC]">
                    {renderTerm(fal.name, scriptMode)} ({fal.name.iast})
                  </span>
                  <span className="font-mono text-[10px] font-bold text-rose-700 dark:text-rose-400">
                    Defective Reason
                  </span>
                </div>
                <p className="text-xs font-sans text-ink-700 dark:text-[#CBD5E1]">
                  {fal.description}
                </p>
                <div className="text-[11px] font-mono text-ink-500 dark:text-[#8C8275] italic">
                  Example: "{fal.example}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
