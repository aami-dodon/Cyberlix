import { AnyLead } from '../entities/lead';

class LeadRepository {
  private leads: AnyLead[] = [];

  save(lead: AnyLead): AnyLead {
    this.leads.push(lead);
    return lead;
  }

  all(): AnyLead[] {
    return this.leads;
  }
}

export const leadRepository = new LeadRepository();
