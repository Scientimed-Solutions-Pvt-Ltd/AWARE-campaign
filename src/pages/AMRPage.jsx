import PageLayout from './PageLayout';
import AMRContent from '../components/AMRContent';

// the layout component handles header, footer, and next button


export default function AMRPage({ onNext }) {
  // call the optional onNext prop so the parent can control navigation
  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      console.log('Next button clicked');
    }
  };

  return (
    <PageLayout onNext={handleNext}>
      {/* top content stays the same */}
      <AMRContent />
    </PageLayout>
  );
}
