import type { Metadata } from "next";
import { basehub } from "basehub";
import "../../basehub.config";

export const dynamic = "force-static";
export const revalidate = 30;

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "BaseHub Documentation",
    description: "Documentation and help center",
  };
};

export default async function HomePage() {
  let greeting = "Welcome!";
  let subtitle = "";
  let rights = "© 2025";

  try {
    const data = await basehub().query({
      index: {
        greeting: true,
        subtitle: {
          plainText: true,
        },
        rights: true,
        socialMediaLinks: {
          items: {
            url: true,
          },
        },
      },
    });
    greeting = data.index.greeting ?? greeting;
    subtitle = data.index.subtitle?.plainText ?? subtitle;
    rights = data.index.rights ?? rights;
  } catch (e) {
    // Use defaults
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{greeting}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          {subtitle}
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>{rights}</p>
      </footer>
    </div>
  );
}
