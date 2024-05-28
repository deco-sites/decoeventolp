import { scriptAsDataURI } from "apps/utils/dataURI.ts";

export default function Clipboard() {
  function setup () {
    return document?.querySelector('#clipboard-btn')?.addEventListener('click', (item: any) => {
      navigator.clipboard.writeText("TEXTO COPIADO");
      item.target.innerHTML = "<img src='https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10325/c1739bf9-c00c-4a01-9f11-3d18e5b683c1' alt='check' width='20'>Copied invite!";
      setTimeout(function() {
        item.target.innerHTML = 'Copy invite';
      }, 3000); 
    })
  }
  return (
    <>
      <script
        defer
        src={scriptAsDataURI(setup)}
      />
    </>
  )
}
