import { useState } from "react";

import { OffsetRegister } from "@/types/offsets";

export default function useOffsetRegister(offset?: OffsetRegister) {
  const [offsetN, setOffsetN] = useState<OffsetRegister>(offset);

  return [offsetN, setOffsetN] as const;
}
