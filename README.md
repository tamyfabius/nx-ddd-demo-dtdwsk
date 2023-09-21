/**
 * @function updateSourceAndDestinationEnv
 * @param ruleToUpdate - The DofTicketRuleModel object containing rule details
 * @description Update source and destination environment names based on rule to update
 */
private updateSourceAndDestinationEnv(ruleToUpdate: DofTicketRuleModel): void {
  const sourceEnvName = this._firewallRulesRequestFacade.getEnvNameSelected(ruleToUpdate.source_servers);
  const destEnvName = this._firewallRulesRequestFacade.getEnvNameSelected(ruleToUpdate.destination_servers);

  this.updateSourceEnv(ruleToUpdate, sourceEnvName);
  this.updateDestinationEnv(ruleToUpdate, destEnvName);
}

/**
 * @function updateSourceEnv
 * @param ruleToUpdate - The DofTicketRuleModel object containing rule details
 * @param sourceEnvName - The name of the source environment
 * @description Update source environment and fetch relevant IPs
 */
private updateSourceEnv(ruleToUpdate: DofTicketRuleModel, sourceEnvName: string): void {
  if (!isNullOrUndefinedOrEmptyString(sourceEnvName) && ruleToUpdate.source_cia) {
    this.selectedSourceEnv = this._firewallRulesRequestFacade.getEnvSelected(sourceEnvName);
    this.ipsSourceList$ = this._firewallRulesRequestFacade.getDofTicketServersByCiaAndEnvironment(ruleToUpdate.source_cia, this.selectedSourceEnv);
  }
}

/**
 * @function updateDestinationEnv
 * @param ruleToUpdate - The DofTicketRuleModel object containing rule details
 * @param destEnvName - The name of the destination environment
 * @description Update destination environment and fetch relevant IPs
 */
private updateDestinationEnv(ruleToUpdate: DofTicketRuleModel, destEnvName: string): void {
  if (!isNullOrUndefinedOrEmptyString(destEnvName) && ruleToUpdate.destination_cia) {
    this.selectedDestinationEnv = this._firewallRulesRequestFacade.getEnvSelected(destEnvName);
    this.ipsDestinationList$ = this._firewallRulesRequestFacade.getDofTicketServersByCiaAndEnvironment(ruleToUpdate.destination_cia, this.selectedDestinationEnv);
  }
}

/**
 * @function openAddSourceDialogForUpdate
 * @param data - The data object containing rule to update and rowIndex
 * @description Opens the dialog for adding a source and initializes it for updating an existing rule
 */
openAddSourceDialogForUpdate(data: {
  ruleToUpdate: DofTicketRuleModel;
  rowIndex: number;
}): void {
  this.sourceDialogMode = 'UPDATE';
  this.dofTicketRuleUpdateForm = this._firewallRulesRequestFacade.buildUpdateDofRuleForm(data?.ruleToUpdate);

  this.updateSourceAndDestinationEnv(data?.ruleToUpdate);

  this.displayAddSourceDialog = !this.displayAddSourceDialog;
}
