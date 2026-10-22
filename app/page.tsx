import { HeroAcasa, Liceul, Drumul, Profiluri, Noutati, Voci, Admitere } from "@/components/home/Sectiuni";
import { fetchNoutati, fetchSettings } from "@/lib/fetcher";
import { anAdmitere } from "@/lib/constants";
import { CONTINUT_VERIFICAT } from "@/lib/data";

// Homepage-ul citește din CMS — anunțurile noi și statisticile actualizate
// apar aici în maxim 60 de secunde, ca pe restul paginilor.
export const revalidate = 60;

export default async function HomePage() {
  const [noutati, settings] = await Promise.all([fetchNoutati(), fetchSettings()]);
  const admitere = anAdmitere();

  return (<>
    <HeroAcasa admitere={admitere} elevi={settings.eleviCount} ani={settings.aniExcelenta} profileCount={settings.profileCount} />
    <Liceul elevi={settings.eleviCount} cadre={settings.cadreCount} profileCount={settings.profileCount} anScolar={settings.anScolar} />
    <Drumul />
    <Profiluri />
    <Noutati noutati={noutati} />
    {CONTINUT_VERIFICAT.testimoniale && <Voci />}
    <Admitere admitere={admitere} />
  </>);
}
