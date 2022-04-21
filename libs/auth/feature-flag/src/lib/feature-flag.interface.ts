export interface CreateFeatureFlagDTO {
  title: string;
  createdOn: Date;
  updatedOn: Date;
  active: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UpdateFeatureFlagDTO extends Partial<CreateFeatureFlagDTO> {
}