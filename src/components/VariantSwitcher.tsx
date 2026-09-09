import React from 'react';
import { Layers } from 'lucide-react';
import './VariantSwitcher.css';

interface VariantSwitcherProps {
  currentVariant: 'a' | 'b' | 'c';
  onSelectVariant: (v: 'a' | 'b' | 'c') => void;
}

const variants = [
  { id: 'a', label: 'Variant A: Smokehouse Ledger' },
  { id: 'b', label: 'Variant B: The Smoke Drop' },
  { id: 'c', label: 'Variant C: Rival Smoke Poster' },
] as const;

export const VariantSwitcher: React.FC<VariantSwitcherProps> = ({ currentVariant, onSelectVariant }) => {
  return (
    <aside className="preview-dock print:hidden" aria-label="Rival Q BBQ preview comparison" data-preview-dock-version="v7">
      <div className="preview-dock-scroll">
        <span className="preview-group-label" aria-hidden="true">
          <Layers className="preview-dock-icon" strokeWidth={1.7} />
          VARIANT:
        </span>
        <span className="preview-dock-divider" aria-hidden="true" />
        <div className="preview-designs" role="group" aria-label="Preview designs">
          {variants.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className="preview-design"
              aria-label={label}
              aria-pressed={currentVariant === id}
              title={label}
              onClick={() => onSelectVariant(id)}
            >
              <span className="preview-design-code" aria-hidden="true">{id.toUpperCase()}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};
