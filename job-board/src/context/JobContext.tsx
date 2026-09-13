import React from "react";
import type { JobContextType } from "../helpers/types";

export const JobContext = React.createContext<JobContextType | null>(null)