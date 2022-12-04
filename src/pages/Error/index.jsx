import { useEffect } from 'react';

export default function Error() {
    useEffect(() => {
        document.title = `Nous ne trouvons pas la page recherchée`;
      });
  return (
    <div>
      <h1>Une erreur est survenue</h1>
    </div>
  );
}
