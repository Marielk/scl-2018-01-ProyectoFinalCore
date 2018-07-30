describe(
  'currentVisitorRegistration',
  () => {
    it('should return an object',
    () => {
      const currentVisitor = currentVisitorRegistration();
      expect(currentVisitor.name).toBe('string');
      expect(currentVisitor.rut).toBe('number');
      expect(currentVisitor.arrivingTime).toBe('Date');
    });
});
